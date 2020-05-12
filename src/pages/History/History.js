import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStoreContext } from '../../store/storeContext';
import { useMainContext } from '../Main/mainContext';
import Header from '../../components/Header/Header';
import Sort from '../../components/Sort/Sort';
import FilterType from '../../components/FilterType/FilterType';
import FilterDate from '../../components/FilterDate/FilterDate';
import EditHistory from './EditHistory/EditHistory';
import DeleteHistory from './DeleteHistory/DeleteHistory';
import Search from '../../components/Search/Search';
import View from '../../components/View/View';
import Snackbars from '../../components/Snackbars/Snackbars';
import { currencySign } from '../../globals/constants';
import { formatingAmount } from '../../globals/helpers';
import useStyles from './History.style';

function filterByDate(budget, date) {
  switch (date) {
    case 'daily': return (
      budget.filter((item) => (
        item.date.getDate() === new Date().getDate()
        && item.date.getMonth() === new Date().getMonth()
        && item.date.getFullYear() === new Date().getFullYear()
      ))
    );
    case 'monthly': return (
      budget.filter((item) => (
        item.date.getMonth() === new Date().getMonth()
        && item.date.getFullYear() === new Date().getFullYear()
      ))
    );
    case 'yearly': return (
      budget.filter((item) => (
        item.date.getFullYear() === new Date().getFullYear()
      ))
    );
    default: return [...budget];
  }
}

export default function History() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const { loading, currency } = useMainContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);
  const [filterDate, setFilterDate] = useState('wholePeriod');
  const [searchValue, setSearchValue] = useState('');
  const [isCurrent, setIsCurrent] = useState(true);
  const [page, setPage] = useState(1);

  const currentBudget = state.budget.filter((item) => item.date.getTime() <= new Date().getTime());
  const upcomingBudget = state.budget.filter((item) => item.date.getTime() > new Date().getTime());

  useEffect(() => {
    setPage(1);
  }, [filterType, isAscending, filterDate, searchValue]);

  const showItems = isCurrent ? currentBudget : upcomingBudget;

  const budgetFilteredByType = filterType === 'all'
    ? [...showItems]
    : showItems.filter((budget) => budget.type === filterType);

  const budgetFilteredByDate = filterByDate(budgetFilteredByType, filterDate);

  const budgetSorted = budgetFilteredByDate.sort((a, b) => (
    isAscending ? a.amount - b.amount : b.amount - a.amount
  ));

  const budgetSearched = searchValue === ''
    ? budgetSorted
    : budgetSorted.filter((item) => item.name.toLowerCase().startsWith(searchValue.toLowerCase()));

  const elementsPerPage = 6;
  const countPages = Math.ceil(budgetSearched.length / elementsPerPage);
  const indexMin = (page - 1) * elementsPerPage;
  const indexMax = indexMin + elementsPerPage;

  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.tools}>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <FilterType filterType={filterType} setFilterType={setFilterType} />
        <FilterDate filterDate={filterDate} setFilterDate={setFilterDate} />
        <View isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      {loading
        ? (
          <div className={classes.progress}>
            <CircularProgress size={50} />
          </div>
        )
        : (
          <div className={classes.flexContainer}>
            {budgetSearched
              .filter((item, index) => index >= indexMin && index < indexMax)
              .map((item) => (
                <Card key={item.id} className={classes.card}>
                  <CardContent>
                    <div className={classes.cardItem}>
                      <Typography className={classes.name}>{item.name}</Typography>
                      <div className={classes.amount}>
                        <EditHistory budget={item} />
                        <DeleteHistory budget={item} />
                      </div>
                    </div>

                    <hr className={classes.hr} />

                    <div className={classes.cardItem}>
                      <Typography className={classes.category}>
                        {state.categories.find((category) => category.id === item.categoryId).name}
                      </Typography>

                      <Typography>
                        {item.type === 'expense' ? '-' : '+'}
                        {formatingAmount(item.amount)}
                        {currencySign[currency]}
                      </Typography>

                      <Typography className={classes.date}>
                        {item.date.toLocaleDateString()}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}
      <Pagination
        count={countPages}
        page={page}
        onChange={(e, vlaue) => setPage(vlaue)}
        variant="outlined"
        color="secondary"
        className={classes.pagination}
      />
      <Snackbars />
    </div>
  );
}

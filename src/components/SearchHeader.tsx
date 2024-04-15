type Props = {
  setSearchQuery: (data: string) => void;
  searchQuery: string;
}

const SearchHeader = (props: Props) => {
  const { setSearchQuery, searchQuery } = props;
  return (
    <div className="content__row content__row--header">
      <form className="search">
        <div className="search__container">
          <div className="search__col">
            <button className="search__btn search__btn--search" type="submit"></button>
            <input onChange={(e) => setSearchQuery(e.target.value)} className="search__input-text" type="text" name="" value={searchQuery} placeholder="Искать в Мечте"
              data-popup="mobile-search" />
            <div className="search__btn search__btn--close"></div>
          </div>
          <div className="search__col">
            <div className="search__btn search__btn--profile"></div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchHeader

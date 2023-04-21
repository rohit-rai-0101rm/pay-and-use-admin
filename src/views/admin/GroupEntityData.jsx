import React from 'react'
import { useSelector } from 'react-redux'

const GroupEntityData = () => {
    const{loading,groupEntityList}=useSelector((state)=>state.groupEntityList)
    console.log(groupEntityList)
  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title="Groups --MITRA PAISA" />
        <h2 className="groupsHeading">Groups</h2>

        <div className="groups">
          {groupEntityList &&
            groupEntityList.map((group) => (
              <GroupEntityCard key={groupEntityList.id} group={group} />
            ))}
        </div>

 
          <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={25}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
       
      </Fragment>
    )}
  </Fragment>
  )
}

export default GroupEntityData
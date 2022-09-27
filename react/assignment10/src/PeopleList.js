function PeopleList(props) {
  return (
    <>
      {props.peopleList &&
        props.peopleList.map((object, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                alert(
                  "Full name: " +
                    object.first_name +
                    " " +
                    object.last_name +
                    "\nEmail: " +
                    object.email
                );
              }}
            >
              <img src={object.avatar} />
              {object.first_name}
            </div>
          );
        })}
    </>
  );
}

export default PeopleList;

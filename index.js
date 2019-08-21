const App = ({user}) => (
    <div>
      <When predicate={user}>
      {() => (
        <div>Welcome back {user.name}!</div>
      )}
      </When>
    </div>
  );
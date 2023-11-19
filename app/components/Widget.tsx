export const Widget = () => {
  return (
    <div>
      <h2 className="py-[0.64rem] px-3 bg-greenspark_purple text-white text-xs">
        This product collects <span className="text-lg block">100 plastic bottles</span>
      </h2>
      <form>
        <ul>
          <li>
            <label htmlFor="public-profile-link">Link to Public Profile</label>
            <input type="checkbox" name="public-profile-link" id="public-profile-link" />
          </li>
          <li>
            <fieldset>
              <legend>Badge colour</legend>
              <div>
                <input type="radio" id="purple" name="colour" value="purple" checked />
                <label htmlFor="purple">Purple</label>
              </div>
              <div>
                <input type="radio" id="green" name="colour" value="green" />
                <label htmlFor="green">Green</label>
              </div>
              <div>
                <input type="radio" id="white" name="colour" value="white" />
                <label htmlFor="white">White</label>
              </div>
              <div>
                <input type="radio" id="black" name="colour" value="black" />
                <label htmlFor="black">Black</label>
              </div>
            </fieldset>
          </li>
          <li>
            <label htmlFor="active">Active badge</label>
            <input type="checkbox" name="active" id="active" />
          </li>
        </ul>
      </form>
    </div>
  );
};

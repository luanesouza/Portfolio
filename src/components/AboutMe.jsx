import React from 'react';
import AboutMeImage from './AboutMeImage';

export default (props) => {
  if (props.isOpen === false) {
    return null;
  }

  return (
    <div class="modal">
      <h2>About The Developer
        <button id="close-modal" onClick={props.closeModal}>x</button>
      </h2>

      <div className="modal-above">
        <AboutMeImage />
        <p id="about-me">
          Lea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.
          Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane.
        </p>
      </div>
    </div>
  )
}

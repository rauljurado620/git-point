import React, {PropTypes} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import colors from '../config/colors';

const LabelButton = (
  {
    label,
    largeWithTag,
  },
) => (
  <Button
    title={label.name}
    fontFamily="AvenirNext-DemiBold"
    fontSize={largeWithTag ? 13 : 12}
    color={getFontColorByBackground(label.color)}
    buttonStyle={largeWithTag ? styles.largeLabelButton : styles.smallLabelButton}
    backgroundColor={`#${label.color}`}
    icon={
      largeWithTag && {
        name: 'tag',
        type: 'octicon',
        color: getFontColorByBackground(label.color),
      }
    }
  />
);

const getFontColorByBackground = bgColor => {
  const r = parseInt(bgColor.substr(0,2),16);
	const g = parseInt(bgColor.substr(2,2),16);
	const b = parseInt(bgColor.substr(4,2),16);
	const yiq = ((r*299)+(g*587)+(b*114))/1000;

	return (yiq >= 128) ? colors.black : colors.white;
}

LabelButton.propTypes = {
  label: PropTypes.object,
  largeWithTag: PropTypes.bool,
};

const styles = StyleSheet.create({
  smallLabelButton: {
    padding: 5,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 3,
    marginLeft: 0,
    marginRight: 10,
    minWidth: 70,
  },
  largeLabelButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 0,
    borderRadius: 3,
  }
});

export default LabelButton;

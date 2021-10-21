import { techSkills } from './techSkills';
import TechSkills from '../../components/TechSkills';
import Contacts from '../../components/Contacts';
import woman from '../../assets/images/woman.png';
import PropTypes from 'prop-types';
import { Wrapper, Flex, Title, Info, SubTitle, List } from './HomeView.style';

function HomeView() {
  return (
    <>
      <Wrapper>
        <Flex>
          <Title>Hi there!</Title>
          <Info>/ My name's Liliia Shemet and I’m a Front-end Developer!</Info>
        </Flex>
        <Flex>
          <img
            src={woman}
            alt="Liliia Shemet"
            width="560"
            height="498"
          />
        </Flex>
      </Wrapper>
      <SubTitle>[ Hard skills_ ]</SubTitle>
      <List>
        {techSkills.map(({ id, label, icon }) => (
          <TechSkills key={id} label={label} icon={icon} />
        ))}
      </List>
      <SubTitle>[ Contacts_ ]</SubTitle>
      <Contacts />
    </>
  );
}

HomeView.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.object),
};

export default HomeView;

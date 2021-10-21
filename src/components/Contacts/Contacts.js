import { FiMail } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

import { List, Item, Link } from './Contacts.style';

function Contacts() {
  return (
    <List>
      <Item>
        <Link href="mailto:shemet.liliia@gmail.com" aria-label="E-mail">
          <FiMail size="40" />
        </Link>
      </Item>
      <Item>
        <Link href="https://github.com/LiliiaShemet" aria-label="GitHub">
          <AiFillGithub size="40" />
        </Link>
      </Item>
      <Item>
        <Link
          href="http://linkedin.com/in/лилия-шемет-843085220"
          aria-label="LinkedIn"
        >
          <FaLinkedin size="40" />
        </Link>
      </Item>
    </List>
  );
}

export default Contacts;

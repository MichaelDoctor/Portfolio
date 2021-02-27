import React from 'react';
import Arrays from '../BlogSections1/Arrays';
import BasicDataTypes from '../BlogSections1/BasicDataTypes';
import { Classes } from '../BlogSections1/Classes';
import { Closures } from '../BlogSections1/Closures';
import { Conditionals } from '../BlogSections1/Conditionals';
import { Dictionaries } from '../BlogSections1/Dictionaries';
import End from '../BlogSections1/End';
import { Enums } from '../BlogSections1/Enums';
import { Extensions } from '../BlogSections1/Extensions';
import { Functions } from '../BlogSections1/Functions';
import Introduction from '../BlogSections1/Introduction';
import { Loops } from '../BlogSections1/Loops';
import Operators from '../BlogSections1/Operators';
import { Optionals } from '../BlogSections1/Optionals';
import { Protocols } from '../BlogSections1/Protocols';
import Setup from '../BlogSections1/Setup';
import Variables from '../BlogSections1/Variables';
import Sets from '../BlogSections1/Sets'

const BlogSections = () => {
  return (
    <div className="section-desc">
      <Introduction />
      <Setup />
      <Variables />
      <BasicDataTypes />
      <Operators />
      <Arrays />
      <Conditionals />
      <Loops />
      <Functions />
      <Sets />
      <Dictionaries />
      <Optionals />
      <Enums />
      <Classes />
      <Closures />
      <Protocols />
      <Extensions />
      <End />
    </div>
  );
};
export default BlogSections;

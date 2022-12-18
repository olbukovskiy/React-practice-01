import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import PropTypes from 'prop-types';

// const iconsArray = [
//   FaRegThumbsUp,
//   MdPeople,
//   MdOutlineProductionQuantityLimits,
//   GiTreeDoor,
// ];

// export const Statistics = ({ title, stats }) => {
//   const newData = stats.reverse().map((stat, idx) => {
//     return { ...stat, icon: iconsArray[idx] };
//   });
//   return (
//     <>
//       <StatisticTitle>{title}</StatisticTitle>
//       <StatisticsList>
//         {newData.map(stat => {
//           return (
//             <StatisticItem
//               title={stat.title}
//               total={stat.total}
//               icon={stat.icon}
//             />
//           );
//         })}
//       </StatisticsList>
//     </>
//   );
// };

const iconsObject = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(stat => {
          return (
            <StatisticItem
              key={stat.id}
              title={stat.title}
              total={stat.total}
              icon={iconsObject[stat.id]}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

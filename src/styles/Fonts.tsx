import styled from 'styled-components';
import Colors from './Colors';

const H1 = styled.h1`
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  color: ${Colors.gray6};
`;

const H2 = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: ${Colors.gray6};
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.gray6};
`;

const H5 = styled.h5`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.gray6};
`;

const SmallRegular = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.gray6};
`;

const SmallBold = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.gray6};
`;

const TinyRegular = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.gray6};
`;

const TinyBold = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.gray6};
`;

const ErrorText = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: ${Colors.danger.default};
`;

export { H1, H2, H3, H5, SmallRegular, SmallBold, TinyRegular, TinyBold, ErrorText };

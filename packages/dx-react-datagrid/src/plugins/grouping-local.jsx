import React from 'react';
import { Getter } from '@devexpress/dx-react-core';
import { groupedRows, expandedGroupRows } from '@devexpress/dx-datagrid-core';

export const LocalGrouping = () => (
  <div>
    <Getter
      name="rows"
      pureComputed={groupedRows}
      connectArgs={getter => [
        getter('rows')(),
        getter('grouping')(),
      ]}
    />
    <Getter
      name="rows"
      pureComputed={expandedGroupRows}
      connectArgs={getter => [
        getter('rows')(),
        getter('expandedGroups')(),
      ]}
    />
  </div>
);
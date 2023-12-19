import { useState } from 'react';
import { State } from '@/types/StateType';

import IssuesTitle from '@/src/components/issues/title/issues-title';
import IssuesFilter from '@/src/components/issues/filter/issues-filter';
import IssuesListWrapper from '@/src/components/issues/list/issues-wrapper';

const IssuesPage = (): JSX.Element => {
    const [selectedState, setSelectedState] = useState<State>('OPEN');
    return (
        <div>
            <IssuesTitle title="Issues" />
            <IssuesFilter
                states={['OPEN', 'CLOSED', 'ALL']}
                selectedState={selectedState}
                onStateChange={setSelectedState}
            />
            <br />
            <IssuesListWrapper selectedState={selectedState}></IssuesListWrapper>
        </div>
    );
};

export default IssuesPage;

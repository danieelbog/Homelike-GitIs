import React from 'react';
import { State } from '@/types/StateType';

interface IssuesFilterProps {
    states: string[];
    selectedState: string;
    onStateChange: (state: State) => void;
}

const IssuesFilter: React.FC<IssuesFilterProps> = ({ states, selectedState, onStateChange }): JSX.Element => {
    return (
        <div className="d-grid justify-content-center">
            <div className="mb-2">Filter issues based on state:</div>
            <div
                id="issues-state-filter"
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
            >
                {states.map((state) => (
                    <React.Fragment key={state}>
                        <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id={`btnradio-${state}`}
                            autoComplete="off"
                            checked={selectedState === state}
                            onChange={() => onStateChange(state as State)}
                        />
                        <label
                            className="btn btn-outline-primary"
                            htmlFor={`btnradio-${state}`}
                        >
                            {state.charAt(0) + state.slice(1).toLowerCase()}
                        </label>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default IssuesFilter;

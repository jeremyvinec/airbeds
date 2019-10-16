import React, { Component } from 'react';
import { ReactiveBase, DateRange, NumberBox  } from '@appbaseio/reactivesearch';

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
          type="listing"
        >
          Hello from ReactiveSearch!
          <DateRange
          dataField="date_from"
          componentId="DateRangeSensor"
          title="When"
          numberOfMonths={1}
          queryFormat="basic_date" // yyyyMMdd
          />
          <NumberBox
            componentId="GuestSensor"
            dataField="accommodates"
            title="Guests"
            defaultSelected={2}
            data={{
                start: 1,
                end: 16
            }}
          />
        </ReactiveBase>
      </section>
    );
  }
}
export default App;
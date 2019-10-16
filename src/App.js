import React, { Component } from 'react';
import { ReactiveBase, DateRange, NumberBox, RangeSlider, ResultCard   } from '@appbaseio/reactivesearch';

class App extends Component {

  onData(data) {
    return{
      image: data.image,
      title: data.title,
      description: (
        <div>
          <div className='price'>${data.proce}</div>
          <p className="info">{data.room_type} · {data.accommodates} guests</p>
        </div>
      ),
      url: data.listing_url,
    };
  }
  
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
          <RangeSlider
            componentId="PriceSensor"
            dataField="price"
            title="Price Range"
            range={{
                start: 10,
                end: 250
            }}
            rangeLabels={{
                start: "$10",
                end: "$250"
            }}
            defaultSelected={{
                start: 10,
                end: 50
            }}
            stepValue={10}
            react={{
                and: ["DateRangeSensor"]
            }}
          />
          <ResultCard
            componentId="SearchResult"
            dataField="name"
            from={0}
            size={10}
            onData={this.onData}
            pagination={true}
            react={{
                and: ["GuestSensor", "PriceSensor", "DateRangeSensor"]
            }}
          />
        </ReactiveBase>
      </section>
    );
  }
}
export default App;
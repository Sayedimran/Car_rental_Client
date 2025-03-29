import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const TabCategory = () => {
  return (
    <Tabs>
      <div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Explore Most Popular Cars
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
          Here's a list of some of the most popular cars globally, based on
          sales and customer preferences
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab></Tab>
            <Tab></Tab>
            <Tab></Tab>
            <Tab></Tab>
          </TabList>
        </div>
        <TabPanel>
                  <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategory;

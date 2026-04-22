// LOGISTICS_GUIDE_AGGREGATE_DATA.js

window.LOGISTICS_GUIDE_AGGREGATE_DATA = {
  "tables": {
    "LOGISTICS_GUIDE_AGGREGATE_DATA": {
      "columns": {
        "LOGISTICS_GUIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOGISTICS_GUIDE"
},
        "SOURCE_ADDRESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LG_ADDRESS"
},
        "DEST_ADDRESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LG_ADDRESS"
},
        "AGGREGATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "AGGREGATE_KEY": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TRANSPORT_MODE"
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
},
        "ITINERARY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY_PROFILE"
},
        "BEST_COST_PER": {
          "type": "NUMBER",
          "nullable": false
},
        "BEST_COST_PER_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "BEST_COST_PER_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "BEST_COST_TRANSIT_TIME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Transit time for the best-cost solution"
},
        "BEST_COST_TRANSIT_TIM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "BEST_COST_TRANSIT_TIM_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "BEST_COST_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV"
},
        "AVERAGE_COST_PER": {
          "type": "NUMBER",
          "nullable": false
},
        "AVERAGE_COST_PER_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "AVERAGE_COST_PER_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "AVERAGE_TRANSIT_TIME": {
          "type": "NUMBER",
          "nullable": false
},
        "AVERAGE_TRANSIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "AVERAGE_TRANSIT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "IS_MULTI_MODE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "LG_QUANTITY_BREAK_SEQNO": {
          "type": "NUMBER",
          "nullable": true,
          "foreign_key": "LG_QUANTITY_BREAK"
},
        "BEST_COST_DISTANCE": {
          "type": "NUMBER",
          "nullable": true
},
        "BEST_COST_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "BEST_COST_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "AVERAGE_DISTANCE": {
          "type": "NUMBER",
          "nullable": true
},
        "AVERAGE_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "AVERAGE_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_CAPACITY": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_CAPACITY_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};
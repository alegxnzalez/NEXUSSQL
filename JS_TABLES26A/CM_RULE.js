// CM_RULE.js

window.CM_RULE = {
  "tables": {
    "CM_RULE": {
      "columns": {
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The GID for the rate offering."
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "X_LANE",
          "info": "The GID for the X Lane."
},
        "MAX_CONNECTION_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The Max Connection Time field defines the maximum time allowed when planning any pair of consecutive shipments for inclusion in a continuous move tour. The connection time of any pair of consecutive shipments in a continuous move cannot exceed the max connection time. Connection time is defined as the time between the end of the first shipment being considered and the start of the second shipment"
},
        "MAX_CONNECTION_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the max connection time; days, hours, minutes."
},
        "MAX_CONNECTION_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum connection time in base units."
},
        "MAX_EMPTY_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The Max Empty Distance field defines the maximum empty distance that is allowed when planning any pair of consecutive shipments for inclusion in a continuous move tour. The maximum empty distance provides a way to limit the distance travelled to link shipments into a continuous move tour. If this field is not populated, shipments will be qualified for the same continuous move tour regardless of the distance required to connect them."
},
        "MAX_EMPTY_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for max empty distance. Typically MI or KM."
},
        "MAX_EMPTY_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum empty distance in base units."
},
        "MAX_REL_EMPTY_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Max Empty Distance (%) is used to disqualify shipments that are too short in comparison to the distance travelled to include the shipment in the continuous move tour. Max Empty Distance (%) = 100*E/L, where E = Max Empty Distance L = Line Haul Distance of the shipment"
},
        "MIN_LINEHAUL_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Shipments that are less than the minimum linehaul distance will not be considered for continuous moves/continuous move rates."
},
        "MIN_LINEHAUL_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for minimum linehaul distance. Typically MI or KM."
},
        "MIN_LINEHAUL_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The minimum linehaul distance in base units."
},
        "MAX_TIME_AFTER_DELIV": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum amount of time allowed between the last delivery of one shipment to the pickup of the next shipment. To create a continuous move, the second shipment must be picked up within a certain amount of time after the delivery of the preceding shipment. If this field is left blank, there is no time limit."
},
        "MAX_TIME_AFTER_DELIV_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the max connection time; days, hours, minutes."
},
        "MAX_TIME_AFTER_DELIV_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum time after delivery in base units."
},
        "FREE_EMPTY_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The free distance allowed between shipments in a continuous move tour."
},
        "FREE_EMPTY_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for free empty distance. Typically MI or KM."
},
        "FREE_EMPTY_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The free empty distance in base units."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};
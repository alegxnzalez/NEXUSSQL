// RO_LANE_SPECIAL_SERVICE.js

window.RO_LANE_SPECIAL_SERVICE = {
  "tables": {
    "RO_LANE_SPECIAL_SERVICE": {
      "description": "Mapping of arbitrary (ground move) lanes to Special Service codes for a rate offering",
      "columns": {
        "RO_LANE_SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique ID for this arbitrary lane"
},
        "RO_LANE_SPECIAL_SERVICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Unique ID within domain for this arbitrary lane."
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_OFFERING",
          "info": "Unique ID of associated rate offering."
},
        "LANE_SPECIAL_SERVICE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Enumerated type; only possible value is ARBITRARY for now"
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "X_LANE",
          "info": "Geography for which this special service applies."
},
        "SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Limits applicability of special service to cases where the shipment source is within the specified region"
},
        "DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Limits applicability of special service to cases where the shipment destination is within the specified region"
},
        "SPECIAL_SERVICE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "Special service this lane maps to"
},
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE"
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
},
        "LEVEL_OF_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEVEL_OF_SERVICE"
},
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_DISTANCE",
          "info": "The rate distance to be used while finding the distance for this arbitrary. This value will overrride the rate distance from the main rate offering."
},
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE",
          "info": "The route code to be used while finding distance for this arbitrary."
}
      },
      "fk_tables": []
    }
  }
};
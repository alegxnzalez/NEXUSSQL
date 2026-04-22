// LOCATION_SUBSTITUTE.js

window.LOCATION_SUBSTITUTE = {
  "tables": {
    "LOCATION_SUBSTITUTE": {
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the location. "
        },
        "SUBSTITUTE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The GID for the substitute location.  Use this field to define ONE alternate location from which an order is picked up for transportation purposes. For example, for any ship unit or line item on an order, you can record a Source Location and Destination Location that would typically be used to plan a shipment. However, if you record a Substitute Location for any location that is used as a Source Location on an order, Oracle Transportation Management automatically uses the Substitute Location and populates it on the order release. Oracle Transportation Management also uses the Substitute Location on the order release as the source location when building a shipment; however you can override this location on the order base and order release. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
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

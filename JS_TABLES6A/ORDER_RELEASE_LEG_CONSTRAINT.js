// ORDER_RELEASE_LEG_CONSTRAINT.js

window.ORDER_RELEASE_LEG_CONSTRAINT = {
  "tables": {
    "ORDER_RELEASE_LEG_CONSTRAINT": {
      "columns": {
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "The GID for the order release. "
        },
        "LEG_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LEG_CLASSIFICATION",
          "info": "The leg classification identifier. The leg classification on the order matches to a leg classification on the itinerary leg. The constraints defined here apply to that leg's shipment. "
        },
        "BUY_RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The buy rate offering GID used as a planning constraint. "
        },
        "SELL_RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The sell rate offering GID used as a planning constraint. "
        },
        "BUY_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The buy rate detail GID used as a planning constraint. "
        },
        "SELL_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The sell rate detail GID used as a planning constraint. "
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The equipment group GID used as a planning constraint. "
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The equipment group profile GID used as a planning constraint. "
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The transport mode GID used as a planning constraint. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "The mode profile GID used as a planning constraint. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider GID used as a planning constraint. "
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The service provider profile GID used as a planning constraint. "
        },
        "RATE_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE_PROFILE",
          "info": "The rate service profile GID used as a planning constraint. "
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
          "info": "Date and time of the most recent data update. "
        },
        "SHIP_WITH_GROUP": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The ship with group for applied to this leg classification. "
        },
        "LEG_CONSOLIDATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEG_CONSOLIDATION_GROUP",
          "info": "The load consolidation group set through network planning while managing leg classifications."
        }
      },
      "fk_tables": []
    }
  }
};

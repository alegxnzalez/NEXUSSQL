// LOGISTICS_GUIDE_GEOGRAPHY.js

window.LOGISTICS_GUIDE_GEOGRAPHY = {
  "tables": {
    "LOGISTICS_GUIDE_GEOGRAPHY": {
      "columns": {
        "LOGISTICS_GUIDE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOGISTICS_GUIDE_TEMPLATE"
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION"
        },
        "DESTINATION_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION"
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

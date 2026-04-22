// LG_ADDRESS.js

window.LG_ADDRESS = {
  "tables": {
    "LG_ADDRESS": {
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION"
        },
        "LOCATION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
        },
        "CITY": {
          "type": "VARCHAR2(40)",
          "nullable": false
        },
        "PROVINCE": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": false
        },
        "POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": false
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COUNTRY_CODE"
        },
        "ZONE1": {
          "type": "VARCHAR2(30)",
          "nullable": false
        },
        "ZONE2": {
          "type": "VARCHAR2(30)",
          "nullable": false
        },
        "ZONE3": {
          "type": "VARCHAR2(30)",
          "nullable": false
        },
        "ZONE4": {
          "type": "VARCHAR2(30)",
          "nullable": false
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
      "fk_tables": [
        "LOGISTICS_GUIDE_AGGREGATE_DATA",
        "LOGISTICS_GUIDE_DETAIL"
      ]
    }
  }
};

// STATION_CODE.js

window.STATION_CODE = {
  "tables": {
    "STATION_CODE": {
      "description": "The Station Code is a code used for a station on a location.",
      "columns": {
        "STATION_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique Station Code."
},
        "STATION_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The Station Code."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The Description for the Station Code."
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
        "PROVINCE_CODE": {
          "type": "VARCHAR2(240)",
          "nullable": true
},
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "NU_STATION_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This is the non-unique station code."
},
        "COUNTY": {
          "type": "VARCHAR2(50)",
          "nullable": true
}
      },
      "fk_tables": [
        "LOCATION",
        "REGION_DETAIL",
        "X_LANE"
]
    }
  }
};
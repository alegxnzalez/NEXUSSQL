// LOCATION_CORPORATION.js

window.LOCATION_CORPORATION = {
  "tables": {
    "LOCATION_CORPORATION": {
      "description": "If a location is also a corporate headquarter, the information is stored in this table. Thus, the location gid will be in both location table and location_corporation table.",
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "LOCATION_GID contains the unique identifier for the location."
},
        "CORPORATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CORPORATION",
          "info": "CORPORATION_GID contains the unique identifier for the location's corporation."
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
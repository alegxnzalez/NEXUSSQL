// ETL_STAGING.js

window.ETL_STAGING = {
  "tables": {
    "ETL_STAGING": {
      "description": "ETL staging table to hold: 1) orders filtered by the project and scenario order saved queries; and 2) records filtered by ETL data rules for the project and scenario",
      "columns": {
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "OBJECT_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
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
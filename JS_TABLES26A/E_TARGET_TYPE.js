// E_TARGET_TYPE.js

window.E_TARGET_TYPE = {
  "tables": {
    "E_TARGET_TYPE": {
      "description": "This table stores the various types of targets in the system. Example, TARGET, INDUSTRY_BENCHMARK, FORECAST. This table should usually only contain PUBLIC data.",
      "columns": {
        "TARGET_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "TARGET_TYPE_XID": {
          "type": "VARCHAR2(50)",
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
        "E_KPI_TARGET_VALUE_TYPE"
]
    }
  }
};
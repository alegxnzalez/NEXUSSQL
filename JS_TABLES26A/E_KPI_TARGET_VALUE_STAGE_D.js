// E_KPI_TARGET_VALUE_STAGE_D.js

window.E_KPI_TARGET_VALUE_STAGE_D = {
  "tables": {
    "E_KPI_TARGET_VALUE_STAGE_D": {
      "description": "This table in combination of its header table, stores the USER_ENTERED target data. The table contains data for only those KPIs that have a TARGET_VALUE_TYPE of USER_ENTERED",
      "columns": {
        "TARGET_VALUE_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "E_KPI_TARGET_VALUE_STAGE"
},
        "TARGET_VALUE_D_SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "YEAR": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "PERIOD_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "T_MODE": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "S_LOCATION": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "D_LOCATION": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "TARGET_VALUE": {
          "type": "NUMBER",
          "nullable": true
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
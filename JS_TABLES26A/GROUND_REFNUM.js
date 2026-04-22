// GROUND_REFNUM.js

window.GROUND_REFNUM = {
  "tables": {
    "GROUND_REFNUM": {
      "description": "Ground reference number table",
      "columns": {
        "REPETITION_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPETITION_SCHEDULE",
          "info": "Repetition schedule GID"
},
        "GROUND_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GROUND_REFNUM_QUAL",
          "info": "Repetition schedule reference qualifier GID"
},
        "GROUND_REFNUM_VALUE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "Repetition schedule reference number"
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
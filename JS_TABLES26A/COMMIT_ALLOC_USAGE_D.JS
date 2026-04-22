// COMMIT_ALLOC_USAGE_D.js

window.COMMIT_ALLOC_USAGE_D = {
  "tables": {
    "COMMIT_ALLOC_USAGE_D": {
      "columns": {
        "COMMIT_ALLOC_USAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COMMIT_ALLOC_USAGE"
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV"
},
        "COMMIT_PERC": {
          "type": "NUMBER",
          "nullable": false
},
        "IS_OVERRIDE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "PLANNED_COUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "PLANNED_COUNT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "PLANNED_COUNT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "FINAL_COUNT": {
          "type": "NUMBER",
          "nullable": false
},
        "FINAL_COUNT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "FINAL_COUNT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING"
},
        "COMMIT_ALLOC_USAGE_D_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
}
      },
      "fk_tables": []
    }
  }
};
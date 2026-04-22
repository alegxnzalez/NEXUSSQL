// COMMIT_ALLOC_USAGE.js

window.COMMIT_ALLOC_USAGE = {
  "tables": {
    "COMMIT_ALLOC_USAGE": {
      "columns": {
        "COMMIT_ALLOC_USAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "COMMIT_ALLOC_USAGE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CAPACITY_COMMITMENT_ALLOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CAPACITY_COMMITMENT_ALLOC"
},
        "START_DATE": {
          "type": "DATE",
          "nullable": false
},
        "END_DATE": {
          "type": "DATE",
          "nullable": false
},
        "PLANNED_TOTAL_COUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "PLANNED_TOTAL_COUNT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "PLANNED_TOTAL_COUNT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "FINAL_TOTAL_COUNT": {
          "type": "NUMBER",
          "nullable": false
},
        "FINAL_TOTAL_COUNT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "FINAL_TOTAL_COUNT_BASE": {
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
}
      },
      "fk_tables": [
        "COMMIT_ALLOC_USAGE_D",
        "SHIP_COMMIT_ALLOC_JOIN"
]
    }
  }
};
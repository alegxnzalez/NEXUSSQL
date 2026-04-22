// TIME_PERIOD_TYPE.js

window.TIME_PERIOD_TYPE = {
  "tables": {
    "TIME_PERIOD_TYPE": {
      "description": "Reoccurring date period to specify capacity limit/commitment",
      "columns": {
        "TIME_PERIOD_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "TIME_PERIOD_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "ANNUALLY",
                    "QUARTERLY",
                    "MONTHLY",
                    "WEEKLY",
                    "DAILY",
                    "DAYOFWEEK"
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
        "CAPACITY_COMMITMENT",
        "CAPACITY_COMMITMENT_ALLOC",
        "CAPACITY_LIMIT"
]
    }
  }
};
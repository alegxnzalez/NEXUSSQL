// BN_RANGE_COUNT_TEST.js

window.BN_RANGE_COUNT_TEST = {
  "tables": {
    "BN_RANGE_COUNT_TEST": {
      "description": "This table is a copy of the BN_RANGE_COUNT table to be used by the tool for testing the BNG.  It allows testing to be completely decoupled from the live BNG data so as not to cause conflicts.",
      "columns": {
        "BN_RANGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BN_RANGE"
},
        "IS_OPEN": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "POOLED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "GENERATED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "ASSIGNED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "DESTROYED_COUNT": {
          "type": "NUMBER(10)",
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
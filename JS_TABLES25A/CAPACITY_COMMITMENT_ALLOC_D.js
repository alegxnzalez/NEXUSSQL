// CAPACITY_COMMITMENT_ALLOC_D.js

window.CAPACITY_COMMITMENT_ALLOC_D = {
  "tables": {
    "CAPACITY_COMMITMENT_ALLOC_D": {
      "columns": {
        "CAPACITY_COMMITMENT_ALLOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CAPACITY_COMMITMENT_ALLOC"
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV"
        },
        "COMMIT_PERC": {
          "type": "NUMBER()",
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
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING"
        },
        "CAPACITY_COMMIT_ALLOC_D_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        }
      },
      "fk_tables": []
    }
  }
};

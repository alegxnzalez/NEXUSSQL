// RATE_FACTOR_RULE_JOIN.js

window.RATE_FACTOR_RULE_JOIN = {
  "tables": {
    "RATE_FACTOR_RULE_JOIN": {
      "columns": {
        "RATE_FACTOR_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_FACTOR_RULE"
        },
        "RULE_JOIN_SEQNO": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "sequence number. "
        },
        "RATE_RECORD_TYPE": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "info": "Indicates type of rate record to generate (Rate Offering, Rate Geo, Accessorial Default)"
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING"
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO"
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

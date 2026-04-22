// BN_RANGE.js

window.BN_RANGE = {
  "tables": {
    "BN_RANGE": {
      "columns": {
        "BN_RANGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identifier for the range. "
        },
        "BN_RANGE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external identifier for the range. "
        },
        "BN_NAMED_RANGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "BN_NAMED_RANGE",
          "info": "The named range to which this range belongs. "
        },
        "BN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_RULE",
          "info": "The business number rule used to generate numbers for the range.  The only segment types allowed are BN sequences, either alphabetical or numerical.  If the field is null, the set of numbers defined in the bn_range_number table is used. "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "Sequence number used for ordering ranges in a named range."
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
        "BN_RANGE_COUNT",
        "BN_RANGE_COUNT_TEST",
        "BN_RANGE_NUMBER",
        "BN_RANGE_NUMBER_TEST"
      ]
    }
  }
};

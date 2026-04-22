// LINE_APP_TOL_SHIPMENT_REFNUM.js

window.LINE_APP_TOL_SHIPMENT_REFNUM = {
  "tables": {
    "LINE_APP_TOL_SHIPMENT_REFNUM": {
      "columns": {
        "LINE_APPROVE_TOLERANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LINE_APPROVE_TOLERANCE",
          "info": "For the shipment reference numbers specified, this is the rule they are attached to "
        },
        "REFNUM_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence for uniqueness of multiple qual/value combinations "
        },
        "SHIPMENT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPMENT_REFNUM_QUAL",
          "info": "If specified with a corrsponding value, the qual-value combination must exist on the shipment in order for the rule to be tested.  If no value is specified, only the qualifier must exist on the shipment. "
        },
        "SHIPMENT_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "Optional shipment refnum value; if specified, the value and its corresponding qualifier must exist on the shipment in order to test the rule"
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

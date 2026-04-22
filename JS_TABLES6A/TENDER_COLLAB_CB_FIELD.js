// TENDER_COLLAB_CB_FIELD.js

window.TENDER_COLLAB_CB_FIELD = {
  "tables": {
    "TENDER_COLLAB_CB_FIELD": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "CONDITIONAL_BOOKING_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONDITIONAL_BOOKING_FIELD"
        },
        "PLANNER_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SERVPROV_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "UOM_CODE": {
          "type": "VARCHAR2(55)",
          "nullable": true
        },
        "IS_PLANNER_APPROVED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "CONDITIONAL_BOOKING_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONDITIONAL_BOOKING_PROFILE"
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
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
        },
        "LOCATION_LONG_NAME": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "LOCATION_ALIAS": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LOCATION_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_QUALIFIER"
        },
        "TIME_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_QUALIFIER"
        },
        "TRANSPORT_STAGE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_STAGE_QUALIFIER"
        },
        "STOP_NUMBER": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        }
      },
      "fk_tables": []
    }
  }
};

// ORDER_SCHEDULE_D.js

window.ORDER_SCHEDULE_D = {
  "tables": {
    "ORDER_SCHEDULE_D": {
      "columns": {
        "ORDER_SCHEDULE_D_ID": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "A system generated number for this detail record. "
        },
        "ORDER_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_SCHEDULE",
          "info": "The ID of the parent order schedule. "
        },
        "DATE_DAY_OF_WEEK": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The number of days to offset the early delivery date from the input date (i.e. +2). "
        },
        "EARLY_DELIVERY_DATE_OFFSET_VAL": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of days to offset the early delivery date from the input date (i.e. +2). "
        },
        "EARLY_DELIVERY_TIME": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The early delivery time of day. "
        },
        "LATE_DELIVERY_DATE_OFFSET_VAL": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of days to offset the late delivery date from the input date (i.e. +3). "
        },
        "LATE_DELIVERY_TIME": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The late delivery time of day. "
        },
        "ORDER_RELEASE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "The ID of the related order release template. "
        },
        "TEMPLATE_COPY_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Identifies the copy behavior of the template (Copy if NULL or Replace)"
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
        "EARLY_PICKUP_DATE_OFFSET_VAL": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EARLY_PICKUP_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LATE_PICKUP_DATE_OFFSET_VAL": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LATE_PICKUP_TIME": {
          "type": "NUMBER()",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};

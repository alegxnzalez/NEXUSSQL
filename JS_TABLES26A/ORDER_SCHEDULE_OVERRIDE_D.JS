// ORDER_SCHEDULE_OVERRIDE_D.js

window.ORDER_SCHEDULE_OVERRIDE_D = {
  "tables": {
    "ORDER_SCHEDULE_OVERRIDE_D": {
      "description": "Details for order delivery schedule overrides.",
      "columns": {
        "ORDER_SCHEDULE_OVERRIDE_D_ID": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "System generated ID of the order schedule override detail."
},
        "ORDER_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_SCHEDULE_OVERRIDE",
          "info": "ID of the parent order schedule."
},
        "ORDER_SCHEDULE_OVERRIDE_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_SCHEDULE_OVERRIDE",
          "info": "ID of the parent order schedule override."
},
        "DATE_DAY_OF_WEEK": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The number of days to offset the early delivery date from the input date (i.e. +2)."
},
        "EARLY_DELIVERY_DATE_OFFSET_VAL": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of days to offset the early delivery date from the input date (i.e. +2)."
},
        "EARLY_DELIVERY_TIME": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The early deliver time of day."
},
        "LATE_DELIVERY_DATE_OFFSET_VAL": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of days to offset the late delivery date from the input date (i.e. +2)."
},
        "LATE_DELIVERY_TIME": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The late delivery time of day."
},
        "ORDER_RELEASE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "The ID of the related Order Release Template"
},
        "TEMPLATE_COPY_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Identifies the copy behaviour of the template (Copy if NULL or Replace)"
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
          "type": "NUMBER",
          "nullable": true
},
        "EARLY_PICKUP_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "LATE_PICKUP_DATE_OFFSET_VAL": {
          "type": "NUMBER",
          "nullable": true
},
        "LATE_PICKUP_TIME": {
          "type": "NUMBER",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};
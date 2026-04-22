// LOGISTICS_GUIDE_TEMPLATE.js

window.LOGISTICS_GUIDE_TEMPLATE = {
  "tables": {
    "LOGISTICS_GUIDE_TEMPLATE": {
      "columns": {
        "LOGISTICS_GUIDE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LOGISTICS_GUIDE_TEMPLATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "NUM_OPTIONS_TO_AGGREGATE": {
          "type": "NUMBER(5)",
          "nullable": false,
          "info": "When calculating averages, number of options to consider "
        },
        "IS_SAVE_DETAIL_RECORDS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "OUTPUT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "Currency to store and display all logistics guide results in.May be unnecessary in 5.5 version (use currency in cost metric) "
        },
        "LOGISTICS_GUIDE_TEMPLATE_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "PLANNING",
            "STANDARD"
          ],
          "info": "indicate purpose of this template. When the value is PLANNING, it is used to generate cost information to be used to guide planning "
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
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "Specifies the ERU being used."
        }
      },
      "fk_tables": [
        "LG_QUANTITY_BREAK",
        "LOGISTICS_GUIDE",
        "LOGISTICS_GUIDE_GEOGRAPHY",
        "LOGISTICS_GUIDE_ORDER_TEMPLATE"
      ]
    }
  }
};

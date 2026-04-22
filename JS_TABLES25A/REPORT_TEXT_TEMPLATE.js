// REPORT_TEXT_TEMPLATE.js

window.REPORT_TEXT_TEMPLATE = {
  "tables": {
    "REPORT_TEXT_TEMPLATE": {
      "columns": {
        "TEXT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TEXT_TEMPLATE"
        },
        "REPORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPORT"
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the id of the user who first entered the record. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the date and time when the record was first entered in the database. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the id of the user who last updated the record. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the date and time when the record was updated in the database."
        }
      },
      "fk_tables": []
    }
  }
};

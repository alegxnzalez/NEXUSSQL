// WORK_INVOICE.js

window.WORK_INVOICE = {
  "tables": {
    "WORK_INVOICE": {
      "columns": {
        "WORK_INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the work invoice. "
        },
        "WORK_INVOICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the work invoice. "
        },
        "WORK_INVOICE_NUMBER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for the work invoice from a business standpoint; if a corrected work invoice is generated, this number will be retained. "
        },
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DRIVER",
          "info": "The GID of the driver for this work invoice. "
        },
        "SECONDARY_DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DRIVER",
          "info": "If driven by a team, the secondary driver ID. "
        },
        "DATE_SENT": {
          "type": "DATE",
          "nullable": true,
          "info": "Date this work invoice was sent to payroll. "
        },
        "REVENUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The sell side revenue. "
        },
        "REVENUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The XID for the revenue currency. "
        },
        "REVENUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Revenue in the base unit of measure currency. "
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates this record can be purged as part of the next purge run. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": [
        "WORK_INVOICE_ACTIVITY",
        "WORK_INVOICE_SHIPMENT_JOIN",
        "WORK_INVOICE_STATUS"
      ]
    }
  }
};

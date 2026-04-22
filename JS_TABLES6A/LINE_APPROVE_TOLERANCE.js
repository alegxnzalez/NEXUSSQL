// LINE_APPROVE_TOLERANCE.js

window.LINE_APPROVE_TOLERANCE = {
  "tables": {
    "LINE_APPROVE_TOLERANCE": {
      "columns": {
        "LINE_APPROVE_TOLERANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "ID for the line approval tolerance rule "
        },
        "LINE_APPROVE_TOLERANCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "IS_INVOICE_REFNUM_MATCH_ALL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If true, all invoice reference numbers in the LINE_APP_TOL_INVOICE_REFNUM table must exist on the invoice to evaluate this rule; if false, only one must exist "
        },
        "IS_SHIPMENT_REFNUM_MATCH_ALL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If true, all shipment reference numbers in the LINE_APP_TOL_SHIPMENT_REFNUM table must exist on the shipment to evaluate this rule; if false, only one must exist "
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
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Effective Date for this Line Approval Tolerance Rule. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Expiration Date for this Line Approval Tolerance Rule."
        }
      },
      "fk_tables": [
        "LINE_APPROVE_TOLERANCE_DETAIL",
        "LINE_APPROVE_TOL_PROFILE_D",
        "LINE_APP_TOL_INVOICE_REFNUM",
        "LINE_APP_TOL_SHIPMENT_REFNUM"
      ]
    }
  }
};

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
          "info": "The Expiration Date for this Line Approval Tolerance Rule. "
        },
        "LINE_AGGR_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "Constraint Set ID. The constraint set ID is used for aggregating the invoice line items. "
        },
        "IS_AGGREGATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If true, indicates that the line approval rule supports invoices having aggregated invoice lines. "
        },
        "LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Added to allow establishing amount tolerance limits by Location Profile. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Added to allow establishing amount tolerance limits by Mode Profile."
        }
      },
      "fk_tables": [
        "LINE_APPROVE_TOLERANCE_DETAIL",
        "LINE_APPROVE_TOL_PROFILE_D",
        "LINE_APP_INV_LINE_ASSOC",
        "LINE_APP_TOL_INVOICE_REFNUM",
        "LINE_APP_TOL_SHIPMENT_REFNUM"
      ]
    }
  }
};

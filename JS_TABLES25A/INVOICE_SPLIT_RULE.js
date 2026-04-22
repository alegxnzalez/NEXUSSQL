// INVOICE_SPLIT_RULE.js

window.INVOICE_SPLIT_RULE = {
  "tables": {
    "INVOICE_SPLIT_RULE": {
      "columns": {
        "INVOICE_SPLIT_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "INVOICE_SPLIT_RULE_GID is the unique identifier for the INVOICE_SPLIT_RULE "
        },
        "INVOICE_SPLIT_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "INVOICE_SPLIT_RULE_XID is the unique external identifier for the INVOICE_SPLIT_RULE "
        },
        "INVOICE_SPLIT_RULE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "INVOICE_SPLIT_RULE_NAME contains the name of the rule for splitting invoice. "
        },
        "INVOICE_SPLIT_RULE_DESC": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "INVOICE_SPLIT_RULE_DESC contains the description about split rule. "
        },
        "INVOICE_SPLIT_RULE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "I",
            "B"
          ],
          "info": "INVOICE_SPLIT_RULE_TYPE indicates whether this RULE is applicable for a bill or an invoice (valid values are I or B) "
        },
        "INVOICE_SPLIT_RULE_CRITERIA": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "L",
            "T",
            "A",
            "O",
            "R",
            "B"
          ],
          "info": "Defines the criterion which is the basis for splitting the invoice. Valid inputs are:L,T,A,O,R,B; L represents - PER COST LINE, T represents -  PER COST TYPE, A represents - PER ACCESORIAL.,O represents - PER ORDER ALLOCATION, R represents - PER ORDER RELEASE LINE ALLOCATION, B represents - PER ORDERBASE LINE ALLOCATION "
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
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether this rule is active or not. "
        },
        "DT_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "Data transfer configuration ID, which will be used to copy data from one entity to other. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date from which this rule will be effective. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Expiry date of the rule. "
        },
        "PRIORITY_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "It will help in selecting rule when multiple matches are available. "
        },
        "BILL_TO_PARTY_ASSIGNMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BILL_TO_PARTY_ASSIGNMENT",
          "info": "The bill to party assignment ID associated with this rule. "
        },
        "MATCH_RULE_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "Constraint Set ID which is used for matching the rule. "
        },
        "LINE_C_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "Constraint Set ID, used for grouping of invoice lineItems. "
        },
        "INVOICE_LINE_ORIGIN": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "L",
            "O",
            "R",
            "B"
          ],
          "info": "It specifies the basis of invoice generation. Valid inputs are:L,O,R,B; L represents - PER COST LINE, O represents - PER ORDER ALLOCATION, R represents - PER ORDER RELEASE LINE ALLOCATION, B represents - PER ORDERBASE LINE ALLOCATION "
        },
        "LINE_AGGR_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "Constraint Set ID. The constraint set ID is used for aggregating the invoice line items."
        }
      },
      "fk_tables": [
        "INVOICE"
      ]
    }
  }
};

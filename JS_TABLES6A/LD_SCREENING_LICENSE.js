// LD_SCREENING_LICENSE.js

window.LD_SCREENING_LICENSE = {
  "tables": {
    "LD_SCREENING_LICENSE": {
      "columns": {
        "LDSCREENING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LD_SCREENING_LINE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ITEM_ID": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LD_SCREENING_LINE",
          "info": "The GC3 OrderBase Line, Release Line or Sship Unit Line Item GID which is the basis for this export license line item service request. "
        },
        "LICENSE_ID": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "key_value": true,
          "info": "A code for any export licenses required for this GC3 Line Item. "
        },
        "LICENSE_DESC": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "A description of any export licenses required for this GC3 Line Item. "
        },
        "LICENSE_NOTE": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "Not used"
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
      "fk_tables": [
        "LD_SCREENING_SUPPORT_DOC"
      ]
    }
  }
};

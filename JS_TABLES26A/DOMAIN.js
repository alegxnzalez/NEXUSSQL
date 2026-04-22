// DOMAIN.js

window.DOMAIN = {
  "tables": {
    "DOMAIN": {
      "description": "Domain is a concept in GC3 that creates a group per customer. When a customer (Shipper/ Service Provider) first installs GC3, it creates a domain for itself. All the subsequent data for that customer is then attached to the domain. This creates a logical grouping of the data per customer in GC3. This also allows GC3 to host multiple customers data simultaneously in one GC3 database. This concept can be thought of as a virtual data space per customer in GC3. The customers can provide access to their domain, to one or more service providers. This concept also allows to store similar codes between various customers, localized to their domain. The GID - Global Identifier is used in each and every table in GC3 to identify codes specific to GC3. The GID is formulated by concatenating Domain name and the XID as DomainName.XID An XID - External Identifier is used to store customer specific codes. For example Wal-Mart may give a code 'Nike' to the Nike shoes in its inventory. K-Mart may also use the code 'Nike' for Nike shoes in its inventory. For Wal-Mart: Domain Name: Wal-Mart Item_XID: Nike Item_GID: Walmart.Nike For K-Mart: Domain Name: Kmart Item_XID: Nike Item_GID: Kmart.Nike",
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "IS_CHILD_DOMAIN": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DOMAIN_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOMAIN_ROLE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "DEFAULT_USER_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_ROLE"
},
        "DOMAIN_PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": true
},
        "G_REFERENCE_DOMAIN": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "foreign_key": "DOMAIN"
},
        "DOCUMENT_USE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOCUMENT_USE_PROFILE",
          "info": "Default profile defining document upload and view for all users in the domain"
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
        "APP_SERVER_DOMAIN",
        "AUDIT_CONTROL",
        "DOMAIN",
        "DOMAIN_PROFILE_D",
        "GTM_AUDIT_CONTROL_SERVICE"
]
    }
  }
};
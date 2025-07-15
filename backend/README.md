

## Requests

curl
```
curl -i localhost:8080/api/uuid
curl -i --user user:password localhost:8080/api/uuid
```

IntelliJ requests.api
```
###
GET http://localhost:8080/api/uuid
Authorization: Basic dXNlcjpwYXNzd29yZA==

###
```
## CORS
Spring Framework provides first class support for CORS. CORS must be processed before Spring Security because the pre-flight request will not contain any cookies (i.e. the JSESSIONID).
(https://docs.spring.io/spring-security/reference/reactive/integrations/cors.html)

## Links:
* https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter
* https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/basic.html
* https://docs.spring.io/spring-security/reference/reactive/integrations/cors.html
* https://www.marcobehler.com/guides/spring-security
* https://spring.io/guides/gs/rest-service-cors
* https://www.baeldung.com/spring-cors
* https://www.baeldung.com/spring-security-cors-preflight
* https://www.kindsonthegenius.com/how-to-authenticate-from-react-to-spring-boot/
* https://www.kindsonthegenius.com/understanding-the-react-springboot-authentication-flow-explained/
* https://www.kindsonthegenius.com/react-springboot-authentication-part-2-user-registration-flow/
